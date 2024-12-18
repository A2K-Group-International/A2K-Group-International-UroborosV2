import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMinistry } from "@/services/ministryService"; // Your mutation function
import { useToast } from "@/hooks/use-toast"; // For notifications

export const useDeleteMinistry = () => {
  const queryClient = useQueryClient(); // Access to queryClient for cache management
  const { toast } = useToast(); // Toast notifications

  const mutation = useMutation({
    mutationFn: deleteMinistry, // The function to delete the ministry
    onSuccess: () => {
      // Invalidate the "ministries" query to refetch updated data
      queryClient.invalidateQueries(["ministries"]);

      toast({
        title: "Ministry Deleted",
        description: `The ministry has been deleted successfully!`,
      });
    },
    onError: (error) => {
      toast({
        title: "Error Deleting Ministry",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  return mutation;
};
