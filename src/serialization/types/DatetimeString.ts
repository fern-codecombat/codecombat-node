/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as CodeCombat from "../../api";
import * as core from "../../core";

export const DatetimeString: core.serialization.Schema<serializers.DatetimeString.Raw, CodeCombat.DatetimeString> =
    core.serialization.string();

export declare namespace DatetimeString {
    type Raw = string;
}