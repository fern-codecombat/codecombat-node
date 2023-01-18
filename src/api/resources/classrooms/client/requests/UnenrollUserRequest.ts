/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CodeCombatApi } from "@fern-api/codecombat";

export interface UnenrollUserRequest {
    /**
     * limit the return number of members for the classroom, the default value is 1000
     */
    retMemberLimit?: number;
    userId: CodeCombatApi.ObjectId;
}
