import { useQuery, useMutation } from "@tanstack/react-query";
import type { InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { skills, projects, experience } from "@/data/portfolio";
import { contactFormConfig, submitToGoogleForm } from "@/lib/googleForm";

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => skills,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => projects,
  });
}

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => experience,
  });
}

export function useContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      await submitToGoogleForm(contactFormConfig, {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      return true;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });
}
