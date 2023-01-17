/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodecombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.users.modifyUser.Request.Raw,
    CodecombatApi.ModifyUserRequest
> = core.serialization.object({
    name: core.serialization.string(),
    birthday: core.serialization.string().optional(),
});

export declare namespace Request {
    interface Raw {
        name: string;
        birthday?: string | null;
    }
}

export const Response: core.serialization.Schema<
    serializers.users.modifyUser.Response.Raw,
    CodecombatApi.UserResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).UserResponse);

export declare namespace Response {
    type Raw = serializers.UserResponse.Raw;
}
