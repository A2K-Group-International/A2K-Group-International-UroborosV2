import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { editRegistrationSchema } from "@/zodSchema/EditRegistrationSchema";
import { walkInRegisterSchema } from "@/zodSchema/WalkInRegisterSchema";

// Sample events and registered users for demonstration
const events = [
  {
    id: "event1",
    name: "Children's Liturgy",
    dateTime: "2024-11-20T04:39:00Z",
  },
  {
    id: "event2",
    name: "Youth Choir Practice",
    dateTime: "2024-12-21T14:00:00Z",
  },
  {
    id: "event3",
    name: "Evening Mass",
    dateTime: "2024-12-20T18:00:00Z",
  },
];

// Attendance Coming from the database
const registeredUsers = [
  {
    registrationCode: "123456",
    event: "Youth Choir Practice",
    eventId: "event1",
    dateTime: "2024-12-21T14:00:00Z",
    parents: [
      {
        parentFirstName: "John",
        parentLastName: "Doe",
        parentContactNumber: "12345678901",
        isMainApplicant: true,
      },
    ],
    children: [{ childFirstName: "Anna", childLastName: "Doe" }],
  },
  {
    registrationCode: "111111",
    eventId: "event2",
    event: "Youth Choir Practice",
    dateTime: "2024-12-21T14:00:00Z",
    parents: [
      {
        parentFirstName: "Jane",
        parentLastName: "Smith",
        parentContactNumber: "98765432101",
        isMainApplicant: false,
      },
    ],
    children: [
      { childFirstName: "Lucas", childLastName: "Smith" },
      { childFirstName: "Emily", childLastName: "Smith" },
    ],
  },
];

const EditRegistration = () => {
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  //Registration Code Form
  const registrationForm = useForm({
    resolver: zodResolver(editRegistrationSchema),
    defaultValues: {
      registrationCode: "",
    },
  });
  // Form setup with react-hook-form and Zod validation
  const attendeeInformation = useForm({
    resolver: zodResolver(walkInRegisterSchema),
    defaultValues: {
      event: "",
      parents: [
        {
          parentFirstName: "",
          parentLastName: "",
          parentContactNumber: "",
          isMainApplicant: false,
        },
      ],
      children: [
        {
          childFirstName: "",
          childLastName: "",
        },
      ],
    },
  });

  // Handle the registration code input
  const handleRegistrationCodeSubmit = (data) => {
    const user = registeredUsers.find(
      (user) => user.registrationCode === data.registrationCode.trim()
    );

    if (user) {
      setIsCodeValid(true);
      registrationForm.reset({
        registrationCode: "",
      }); // Reset the registration code in Edit Registration Form

      // Populate form fields with the appropriate data
      attendeeInformation.setValue("eventId", user.eventId);
      attendeeInformation.setValue("event", user.event);
      attendeeInformation.setValue("parents", user.parents);
      attendeeInformation.setValue("children", user.children);
      console.log(attendeeInformation.getValues());

    } else {
      toast({
        title: "Registration Code Error",
        description:
          "The registration code you entered is invalid. Please try again with a valid code.",
        variant: "destructive",
      });
    }
  };

  // Function to submit editted user information
  const onSubmit = (values) => {
    // Update user details (In a real app, save this back to the database)
    console.log(values);
  };

  const {
    fields: parentFields,
    append: addParent,
    remove: removeParent,
  } = useFieldArray({
    control: attendeeInformation.control,
    name: "parents",
  });

  const {
    fields: childFields,
    append: addChild,
    remove: removeChild,
  } = useFieldArray({
    control: attendeeInformation.control,
    name: "children",
  });

  // Add parent function
  const addParentField = () => {
    addParent({
      parentFirstName: "",
      parentLastName: "",
      parentContactNumber: "",
      isMainApplicant: false,
    });
  };

  // Add child function
  const addChildField = () => {
    addChild({
      childFirstName: "",
      childLastName: "",
    });
  };

  //Format the date
  const formatDateTime = (dateTime) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date(dateTime));
  };

  // Get current time
  const now = new Date();

  // Removing the past two hours event
  const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);

  // Filter events
  const upcomingEvents = events.filter((event) => {
    const eventTime = new Date(event.dateTime);
    return eventTime >= twoHoursAgo;
  });

  // Reset the forms when closing the dialog

  const handleDialogChange = (open) => {
    setIsDialogOpen(open);
    if (!open) {
      registrationForm.reset();
      attendeeInformation.reset();
      setIsCodeValid(false);
    }
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogTrigger asChild>
          <Button variant="secondary">Edit Registration</Button>
        </DialogTrigger>
        <DialogContent
          className={`no-scrollbar max-w-96 overflow-scroll ${isCodeValid ? "sm:max-w-2xl md:max-h-[38rem]" : "max-h-[45rem]"}`}
        >
          <DialogHeader>
            <DialogTitle>
              {isCodeValid ? "Edit Registration" : "Edit Registration"}
            </DialogTitle>
            <DialogDescription>
              Update your registration details as needed.
            </DialogDescription>
          </DialogHeader>
          {isCodeValid ? (
            <div className="flex flex-col gap-y-4">
              <Form {...attendeeInformation}>
                <form
                  onSubmit={attendeeInformation.handleSubmit(onSubmit)}
                  className="space-y-2"
                >
                  {/* Event Name */}
                  <Label className="text-lg">Upcoming Events</Label>
                  <FormField
                    control={attendeeInformation.control}
                    name="event"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value} // fallback to empty string
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Event" />
                            </SelectTrigger>
                            <SelectContent>
                              {upcomingEvents.map((event) => (
                                <SelectItem key={event.id} value={event.id}>
                                  {event.name} -{" "}
                                  {formatDateTime(event.dateTime)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Parent Guardian Field */}
                  <Label className="text-lg">
                    Parent/Guardian Information{" "}
                  </Label>
                  <span className="hidden text-sm italic text-zinc-400 md:block">
                    (Check the box on the left to choose the main applicant).
                  </span>
                  {parentFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex flex-col gap-2 sm:flex-row sm:items-start"
                    >
                      <div className="flex items-center">
                        <FormField
                          control={attendeeInformation.control}
                          name={`parents[${index}].isMainApplicant`}
                          render={({ field }) => (
                            <FormItem className="flex flex-row-reverse items-center md:flex-1">
                              <FormLabel className="sm:hidden">
                                Check the box choose the main applicant.
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    field.onChange(isChecked);
                                    if (isChecked) {
                                      // Uncheck all other checkboxes
                                      parentFields.forEach((_, i) => {
                                        if (i !== index) {
                                          attendeeInformation.setValue(
                                            `parents[${i}].isMainApplicant`,
                                            false
                                          );
                                        }
                                      });
                                    }
                                  }}
                                  className="h-3 w-5"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={attendeeInformation.control}
                        name={`parents[${index}].parentFirstName`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={attendeeInformation.control}
                        name={`parents[${index}].parentLastName`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={attendeeInformation.control}
                        name={`parents[${index}].parentContactNumber`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Contact Tel No." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Remove Button for each parent field */}
                      {parentFields.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => removeParent(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  {/* Button to add another parent/guardian */}
                  <div className="flex justify-end gap-2">
                    <Button type="button" size="sm" onClick={addParentField}>
                      Add Parent/Guardian
                    </Button>
                  </div>
                  <Label className="text-lg">Child Information </Label>
                  {childFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex flex-col gap-2 sm:flex-row sm:items-start"
                    >
                      <FormField
                        control={attendeeInformation.control}
                        name={`children[${index}].childFirstName`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={attendeeInformation.control}
                        name={`children[${index}].childLastName`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Remove Button for each child field */}
                      {childFields.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => removeChild(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}

                  <div className="flex justify-end gap-2">
                    <Button type="button" size="sm" onClick={addChildField}>
                      Add Child
                    </Button>
                  </div>
                  <DialogFooter>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleDialogChange}>
                        Cancel
                      </Button>
                      <Button type="submit">Submit</Button>
                    </div>
                  </DialogFooter>
                </form>
              </Form>
            </div>
          ) : (
            <Form {...registrationForm}>
              <form
                onSubmit={registrationForm.handleSubmit(
                  handleRegistrationCodeSubmit
                )}
                className="space-y-8"
              >
                <FormField
                  control={registrationForm.control}
                  name="registrationCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Code</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Enter the registration code provided after your walk-in
                        registration to edit your details.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="gap-y-2">
                  <Button variant="outline" onClick={handleDialogChange}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditRegistration;