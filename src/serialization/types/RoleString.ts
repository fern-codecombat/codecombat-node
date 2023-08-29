/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as CodeCombat from "../../api";
import * as core from "../../core";

export const RoleString: core.serialization.Schema<serializers.RoleString.Raw, CodeCombat.RoleString> =
    core.serialization.string();

export declare namespace RoleString {
    type Raw = string;
}