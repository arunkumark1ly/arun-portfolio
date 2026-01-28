/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_RESUME_GOOGLE_FORM_RESPONSE_URL?: string;
  readonly VITE_RESUME_GOOGLE_FORM_EMAIL_ENTRY?: string;
  readonly VITE_RESUME_GOOGLE_FORM_PHONE_ENTRY?: string;

  readonly VITE_CONTACT_GOOGLE_FORM_RESPONSE_URL?: string;
  readonly VITE_CONTACT_GOOGLE_FORM_NAME_ENTRY?: string;
  readonly VITE_CONTACT_GOOGLE_FORM_EMAIL_ENTRY?: string;
  readonly VITE_CONTACT_GOOGLE_FORM_MESSAGE_ENTRY?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
