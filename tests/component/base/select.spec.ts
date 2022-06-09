/**
 * @description: select选择框测试用例
 * @author: 南歌子
 * @date 2021/02/23 11:11
 * @version v1.0.1
 *
 * Hello, humor
 *
 * v1.0.1 升级为vitest版本测试用例 阿怪
 */

import { mount } from '@vue/test-utils';
import { describe, test, expect } from "vitest";
import MSelect from '../../../lib/base/select/MSelect';

describe('选择框组件', () => {
  test('无参数渲染)', () => {
    const wrapper = mount(MSelect);
    expect(wrapper.html()).toContain('m-select');
    wrapper.unmount();
  });
})
