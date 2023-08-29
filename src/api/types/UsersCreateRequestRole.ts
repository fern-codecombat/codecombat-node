/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * `"student"` or `"teacher"`. If unset, a home user will be created, unable to join classrooms.
 *
 */
export type UsersCreateRequestRole = "student" | "teacher";

export const UsersCreateRequestRole = {
    Student: "student",
    Teacher: "teacher",
} as const;
