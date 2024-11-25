import { paginate } from "@/lib/utils";
import { supabase } from "@/services/supabaseClient"; // Ensure supabase client is imported

import { ROLES } from "@/constants/roles";

// Function to create an event
export const createEvent = async (eventData) => {
  try {
    const {
      eventName,
      eventCategory,
      eventVisibility,
      ministry,
      eventDate, // formatted date from the form
      eventTime, // formatted time from the form
      eventDescription,
      userId, // Creator's ID
      assignVolunteer,
    } = eventData;

    // Insert event data into Supabase
    const { data, error } = await supabase
      .from("events")
      .insert([
        {
          event_name: eventName,
          event_category: eventCategory,
          event_visibility: eventVisibility,
          ministry: ministry || null, // Ministry is optional
          event_date: eventDate, // formatted date (yyyy-MM-dd)
          event_time: eventTime, // formatted time (HH:mm:ss)
          event_description: eventDescription || null, // Optional field
          creator_id: userId, // Assuming userId is passed in the form data
          assigned_volunteer: assignVolunteer,
        },
      ])
      .single(); // Returns the created row as a single object

    if (error) {
      throw new Error(error.message); // Handle any errors
    }

    return { success: true, data }; // Return success structure
  } catch (error) {
    console.error("Error creating event:", error);
    return { success: false, error: error.message }; // Return error structure
  }
};

// Function to update an existing event
export const updateEvent = async (eventId, updatedData) => {
  try {
    const {
      eventName,
      eventCategory,
      eventVisibility,
      ministry,
      eventDate,
      eventTime,
      eventDescription,
    } = updatedData;

    // Update event data
    const { data, error } = await supabase
      .from("events")
      .update({
        event_name: eventName,
        event_category: eventCategory,
        event_visibility: eventVisibility,
        ministry: ministry || null,
        event_date: eventDate, // formatted date (yyyy-MM-dd)
        event_time: eventTime, // formatted time (HH:mm:ss)
        event_description: eventDescription || null,
        updated_at: new Date(), // Update the `updated_at` field
      })
      .eq("id", eventId) // Ensure you're updating the correct event by its ID
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, error: error.message };
  }
};

// Function to fetch all events (optionally filter by date, creator, etc.)
export const getEvents = async ({
  creatorId,
  startDate,
  endDate,
  page = 1,
  pageSize,
  query,
  user,
} = {}) => {
  try {
    const filters = {};
    if (startDate) {
      filters.gte = { event_date: startDate };
    }

    if (endDate) {
      filters.lte = { event_date: endDate };
    }

    if (query) {
      filters.ilike = { event_name: query };
    }

    if (creatorId) {
      filters.eq = { creator_id: creatorId };
    }

    if (user?.role !== ROLES[0]) {
      filters.eq = { assigned_volunteer: user?.id };
    }

    const data = await paginate({
      key: "events",
      page,
      pageSize,
      filters,
    });

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return { success: false, error: error.message };
  }
};

// Function to delete an event by its ID
export const deleteEvent = async (eventId) => {
  try {
    const { data, error } = await supabase
      .from("events")
      .delete()
      .eq("id", eventId);

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, error: error.message };
  }
};

// Function to fetch quick access events
export const getQuickAccessEvents = async () => {
  try {
    const { data, error } = await supabase
      .from("quick_access_events")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data; // Return only the data directly
  } catch (error) {
    console.error("Error fetching quick access events:", error);
    throw new Error(error.message);
  }
};

// Function to fetch a single event by its ID
export const getEventById = async (eventId) => {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", eventId)
      .single(); // Fetch only one record

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return { success: false, error: error.message };
  }
};

export const getAllEvents = async () => {
  try {
    const { data, error } = await supabase.from("events").select("*"); // Select all columns from the events table

    if (error) {
      throw new Error(error.message); // Handle any errors
    }

    return { success: true, data }; // Return success structure with data
  } catch (error) {
    console.error("Error fetching events:", error);
    return { success: false, error: error.message }; // Return error structure
  }
};
