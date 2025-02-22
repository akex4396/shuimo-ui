/**
 * @description tooltip api
 * @author youus
 * @date 2022/4/4 01:22
 * @version v1.0.0
 *
 * Hello, humor
 */
import { WCOPO, WPropType } from "../../dependents/_types";
import { MTooltipProps } from "./index";
import { Placement } from "../../dependents/_composables/usePopper";

export const props:WCOPO<MTooltipProps> =  {
  placement: {
    type: String as WPropType<Placement>,
    default: 'bottom',
    validator: (value: string) => [
      'auto',
      'auto-start',
      "auto-end",
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'right',
      'right-start',
      'right-end',
      'left',
      'left-start',
      'left-end',
    ].includes(value)
  },
  disableClickAway: { type: Boolean, default: false },
  offsetSkid: { type: String, default: '0', },
  offsetDistance: { type: String, default: '12' },
  hover: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  arrowPadding: { type: String, default: '0' },
  interactive: { type: Boolean, default: true },
  locked: { type: Boolean, default: false },
  content: { type: String, default: '' },
}
