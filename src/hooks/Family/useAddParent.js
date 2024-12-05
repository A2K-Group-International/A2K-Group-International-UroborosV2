import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { addParent } from "@/services/familyService";

const useAddParent = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ members, familyId }) => addParent(members, familyId),
    onSuccess: (_, variables) => {
      const { members } = variables;
      toast({
        title: "Success",
        description: `${members[0].firstName} ${members[0].lastName} added successfully!`,
      });

      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries(["parents", variables.familyId]);
    },
    onError: (error) => {
      toast({
        title: "Error Adding Family Member",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export default useAddParent;