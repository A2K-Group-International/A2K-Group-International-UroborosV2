import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "@/services/eventService";
import { useToast } from "@/hooks/use-toast";

const useCreateEvent = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient(); // Accessing the query client

  // React Query mutation for creating an event
  const mutation = useMutation({
    mutationFn: createEvent, // Use the createEvent function from eventServices
    onMutate: () => {
      toast({
        title: "Creating Event...",
        description: "Your event is being created.",
      });
    },
    onSuccess: () => {
      toast({
        title: "Event Created",
        description: `The event has been created successfully!`,
      });

      // Invalidate the 'events' query so the list of events is refetched after creating the event
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error) => {
      toast({
        title: "Error Creating Event",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      // Optional: Additional logic after mutation is settled (e.g., cleanup)
    },
  });

  return mutation;
};

export default useCreateEvent;
