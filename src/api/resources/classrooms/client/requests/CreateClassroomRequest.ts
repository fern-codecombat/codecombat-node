/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CodecombatApi } from "@fern-api/codecombat";

export interface CreateClassroomRequest {
    name: string;
    ownerId: CodecombatApi.ObjectId;
    aceConfig: CodecombatApi.AceConfig;
}
