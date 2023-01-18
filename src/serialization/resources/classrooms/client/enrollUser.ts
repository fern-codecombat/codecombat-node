/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.classrooms.enrollUser.Request.Raw,
    Omit<CodeCombatApi.EnrollUserRequest, "retMemberLimit">
> = core.serialization.object({
    userId: core.serialization.lazy(async () => (await import("../../..")).ObjectId),
});

export declare namespace Request {
    interface Raw {
        userId: serializers.ObjectId.Raw;
    }
}

export const Response: core.serialization.Schema<
    serializers.classrooms.enrollUser.Response.Raw,
    CodeCombatApi.ClassroomResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).ClassroomResponse);

export declare namespace Response {
    type Raw = serializers.ClassroomResponse.Raw;
}
