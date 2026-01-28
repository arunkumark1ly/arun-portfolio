export type GoogleFormConfig = {
  formResponseUrl: string;
  fields: Record<string, string>;
};

function createHiddenIframe(name: string) {
  const iframe = document.createElement("iframe");
  iframe.name = name;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  return iframe;
}

function createHiddenForm(action: string, target: string) {
  const form = document.createElement("form");
  form.action = action;
  form.method = "POST";
  form.target = target;
  form.style.display = "none";
  document.body.appendChild(form);
  return form;
}

export async function submitToGoogleForm(config: GoogleFormConfig, values: Record<string, string>): Promise<void> {
  if (!config.formResponseUrl) {
    throw new Error("Google Form is not configured (missing formResponseUrl)");
  }

  console.log('=== FORM SUBMISSION DEBUG ===');
  console.log('Submitting form data:', values);
  console.log('Form URL:', config.formResponseUrl);

  // Transform field names to entry IDs
  const transformedData: Record<string, string> = {};
  Object.entries(values).forEach(([logicalKey, value]) => {
    const entryName = config.fields[logicalKey];
    if (entryName) {
      transformedData[entryName] = value;
    }
  });

  console.log('Transformed data:', transformedData);

  // Try a simple fetch first to test connectivity
  try {
    const formData = new URLSearchParams();
    Object.entries(transformedData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log('Testing fetch with URLSearchParams...');
    const response = await fetch(config.formResponseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('Fetch response status:', response.status);
    const responseText = await response.text();
    console.log('Fetch response text:', responseText);
    
    return;
  } catch (fetchError) {
    console.log('Fetch failed, trying form submission:', fetchError);
    
    // Fallback to form submission
    return new Promise((resolve, reject) => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = config.formResponseUrl;
      form.style.display = 'none';

      // Add form fields with entry IDs as names
      Object.entries(transformedData).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name; // Use entry ID directly
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      
      try {
        form.submit();
        console.log('Form submitted successfully');
        
        // Clean up after submission
        setTimeout(() => {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          resolve();
        }, 1000);
      } catch (error) {
        console.error('Form submission failed:', error);
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        reject(error);
      }
    });
  }
}

export const resumeLeadFormConfig: GoogleFormConfig = {
  formResponseUrl: import.meta.env.VITE_RESUME_GOOGLE_FORM_RESPONSE_URL || "",
  fields: {
    email: import.meta.env.VITE_RESUME_GOOGLE_FORM_EMAIL_ENTRY || "",
    phone: import.meta.env.VITE_RESUME_GOOGLE_FORM_PHONE_ENTRY || "",
  },
};

export const contactFormConfig: GoogleFormConfig = {
  formResponseUrl: import.meta.env.VITE_CONTACT_GOOGLE_FORM_RESPONSE_URL || "",
  fields: {
    name: import.meta.env.VITE_CONTACT_GOOGLE_FORM_NAME_ENTRY || "",
    email: import.meta.env.VITE_CONTACT_GOOGLE_FORM_EMAIL_ENTRY || "",
    message: import.meta.env.VITE_CONTACT_GOOGLE_FORM_MESSAGE_ENTRY || "",
  },
};
