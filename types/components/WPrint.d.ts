/**
 * @Description: 控制台打印模块类型
 * @Author: 菩萨蛮
 * @Date: 2021/6/22 5:08 下午
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */

declare enum PrinterEnum {
  suggest = 'suggest',
  info = 'info',
  error = 'error',
}

/**
 * 基础Print配置
 * <br/>
 * @param type 打印类型 <br/>
 * @param format 格式 <br/>
 * @param content 内容  <br/>
 */
export type OptionalType = {
  type: PrinterEnum,
  format: string,
  content: any
};

export type printInterface = { (options: OptionalType): void; }

export type PrinterType = { [T in PrinterEnum]: (content: any, user: string) => void }

export type IPrinter = (defaultUser: string) => PrinterType;

