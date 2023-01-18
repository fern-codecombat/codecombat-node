/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const UserResponse: core.serialization.ObjectSchema<serializers.UserResponse.Raw, CodeCombatApi.UserResponse> =
    core.serialization.object({
        id: core.serialization.property(
            "_id",
            core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
        ),
        email: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
        role: core.serialization.lazy(async () => (await import("../../..")).RoleString).optional(),
        stats: core.serialization.lazyObject(async () => (await import("../../..")).UserStats).optional(),
        oAuthIdentities: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).OauthIdentity))
            .optional(),
        subscription: core.serialization.lazyObject(async () => (await import("../../..")).Subscription).optional(),
        license: core.serialization.lazyObject(async () => (await import("../../..")).License).optional(),
    });

export declare namespace UserResponse {
    interface Raw {
        _id?: serializers.ObjectId.Raw | null;
        email?: string | null;
        name?: string | null;
        slug?: string | null;
        role?: serializers.RoleString.Raw | null;
        stats?: serializers.UserStats.Raw | null;
        oAuthIdentities?: serializers.OauthIdentity.Raw[] | null;
        subscription?: serializers.Subscription.Raw | null;
        license?: serializers.License.Raw | null;
    }
}
