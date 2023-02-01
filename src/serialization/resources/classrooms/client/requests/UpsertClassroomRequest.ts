/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const UpsertClassroomRequest: core.serialization.Schema<
    serializers.UpsertClassroomRequest.Raw,
    CodeCombatApi.UpsertClassroomRequest
> = core.serialization.object({
    code: core.serialization.string(),
    userId: core.serialization.string(),
    retMemberLimit: core.serialization.number().optional(),
});

export declare namespace UpsertClassroomRequest {
    interface Raw {
        code: string;
        userId: string;
        retMemberLimit?: number | null;
    }
}
