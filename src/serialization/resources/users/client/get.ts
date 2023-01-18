/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.users.get.Response.Raw, CodeCombatApi.UserResponse> =
    core.serialization.lazyObject(async () => (await import("../../..")).UserResponse);

export declare namespace Response {
    type Raw = serializers.UserResponse.Raw;
}
