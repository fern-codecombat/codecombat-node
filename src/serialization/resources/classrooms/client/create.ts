/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodecombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.classrooms.create.Request.Raw,
    CodecombatApi.CreateClassroomRequest
> = core.serialization.object({
    name: core.serialization.string(),
    ownerId: core.serialization.property(
        "ownerID",
        core.serialization.lazy(async () => (await import("../../..")).ObjectId)
    ),
    aceConfig: core.serialization.lazyObject(async () => (await import("../../..")).AceConfig),
});

export declare namespace Request {
    interface Raw {
        name: string;
        ownerID: serializers.ObjectId.Raw;
        aceConfig: serializers.AceConfig.Raw;
    }
}
