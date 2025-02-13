import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import {
  createMinistry,
  editMinistry,
  getAllMinistries,
  deleteMinistry,
  removeMinistryVolunteer,
  fetchMinistryAssignedUsers,
  assignNewVolunteers,
  // getAssignedMinistries,
} from "@/services/ministryService";
// import { ROLES } from "@/constants/roles";

const useMinistry = ({ ministryId }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch ministry members
  const {
    data: ministryMembers,
    error,
    isLoading: membersLoading,
  } = useQuery({
    queryKey: ["ministryMembers", ministryId],
    queryFn: () => fetchMinistryAssignedUsers(ministryId),
    enabled: !!ministryId,
  });

  // Fetch all ministries or assigned ministries depending on role and user
  const { data: ministries, isLoading: ministryLoading } = useQuery({
    queryKey: ["ministries"],
    queryFn: async () => {
      // if (temporaryRole === ROLES[4]) {
      //   // Admin or higher role, fetch all ministries
      //   return getAllMinistries();
      // } else {
      //   // Other roles, fetch only assigned ministries for the user
      //   return getAssignedMinistries(userId);
      // }
      return getAllMinistries();
    },
  });

  // Mutation for creating a ministry
  const createMutation = useMutation({
    mutationFn: createMinistry,
    onSuccess: () => {
      queryClient.invalidateQueries(["ministries"]);
      toast({
        title: "Group Created",
        description: "Group has been created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Creating Group",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Mutation for editing a ministry
  const editMutation = useMutation({
    mutationFn: async (values) => editMinistry(values),
    onSuccess: () => {
      queryClient.invalidateQueries(["ministries"]);
      toast({
        title: "Group Updated",
        description: "Group has been updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Updating Group",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Mutation for deleting a ministry
  const deleteMutation = useMutation({
    mutationFn: deleteMinistry,
    onSuccess: () => {
      queryClient.invalidateQueries(["ministries"]);
      toast({
        title: "Group Deleted",
        description: "Group has been deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Deleting Group",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Mutation for removing a ministry volunteer
  const removeMinistryVolunteerMutation = useMutation({
    mutationFn: ({ ministryId, memberId }) =>
      removeMinistryVolunteer(ministryId, memberId),
    onSuccess: () => {
      toast({
        title: "Member Removed",
        description: "The member has been removed successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Removing Member",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["ministryMembers", ministryId]);
    },
  });

  const AssignMinistryVolunteerMutation = useMutation({
    mutationFn: ({ ministryId, newMembers }) =>
      assignNewVolunteers(ministryId, newMembers), // Destructure values correctly
    onSuccess: () => {
      queryClient.invalidateQueries(["ministries"]);
      queryClient.invalidateQueries(["ministryMembers"]);
    },
    onError: (error) => {
      console.error("Error while assigning volunteers:", error.message);
    },
  });

  return {
    AssignMinistryVolunteerMutation,
    ministryLoading,
    ministryMembers,
    ministries,
    membersLoading,
    error,
    createMutation,
    editMutation,
    deleteMutation,
    removeMinistryVolunteerMutation,
  };
};

export default useMinistry;
