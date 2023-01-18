/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const ObjectId: core.serialization.Schema<serializers.ObjectId.Raw, CodeCombatApi.ObjectId> =
    core.serialization.string();

export declare namespace ObjectId {
    type Raw = string;
}
