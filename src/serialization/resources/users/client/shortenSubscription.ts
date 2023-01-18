/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.users.shortenSubscription.Request.Raw,
    CodeCombatApi.Subscription
> = core.serialization.lazyObject(async () => (await import("../../..")).Subscription);

export declare namespace Request {
    type Raw = serializers.Subscription.Raw;
}

export const Response: core.serialization.Schema<
    serializers.users.shortenSubscription.Response.Raw,
    CodeCombatApi.UserResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).UserResponse);

export declare namespace Response {
    type Raw = serializers.UserResponse.Raw;
}
