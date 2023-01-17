/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodecombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const ClanResponse: core.serialization.ObjectSchema<serializers.ClanResponse.Raw, CodecombatApi.ClanResponse> =
    core.serialization.object({
        id: core.serialization.property(
            "_id",
            core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
        ),
        name: core.serialization.string().optional(),
        displayName: core.serialization.string().optional(),
        members: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).ObjectId))
            .optional(),
        ownerId: core.serialization.property(
            "ownerID",
            core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
        ),
        description: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        kind: core.serialization.string().optional(),
    });

export declare namespace ClanResponse {
    interface Raw {
        _id?: serializers.ObjectId.Raw | null;
        name?: string | null;
        displayName?: string | null;
        members?: serializers.ObjectId.Raw[] | null;
        ownerID?: serializers.ObjectId.Raw | null;
        description?: string | null;
        type?: string | null;
        kind?: string | null;
    }
}
