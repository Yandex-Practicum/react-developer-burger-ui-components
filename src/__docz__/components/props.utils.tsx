import capitalize from 'capitalize';
import { get } from 'lodash/fp';
import { PropType, FlowType } from 'gatsby-theme-docz/src/components/Props';

/*
  Не типизирую, так как это копипаста из библиотеки,
  функция getPropType не экспортируется из нее, потому пришлось копировать :(
 */
const RE_OBJECTOF = /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/;

const getTypeStr = (type: any): any => {
    switch (type.name.toLowerCase()) {
        case 'instanceof':
            return `Class(${type.value})`;
        case 'enum':
            if (type.computed) return type.value;
            return type.value ? type.value.map((v: any) => `${v.value}`).join(' │ ') : type.raw;
        case 'union':
            return type.value
                ? type.value.map((t: any) => `${getTypeStr(t)}`).join(' │ ')
                : type.raw;
        case 'array':
            return type.raw;
        case 'arrayof':
            return `Array<${getTypeStr(type.value)}>`;
        case 'custom':
            if (type.raw.indexOf('function') !== -1 || type.raw.indexOf('=>') !== -1)
                return 'Custom(Function)';
            else if (type.raw.toLowerCase().indexOf('objectof') !== -1) {
                const m = type.raw.match(RE_OBJECTOF);
                if (m && m[1]) return `ObjectOf(${capitalize(m[1])})`;
                return 'ObjectOf';
            }
            return 'Custom';
        case 'bool':
            return 'Boolean';
        case 'func':
            return 'Function';
        case 'shape':
            // eslint-disable-next-line no-case-declarations
            const shape = type.value;
            // eslint-disable-next-line no-case-declarations
            const rst: any = {};
            Object.keys(shape).forEach((key) => {
                rst[key] = getTypeStr(shape[key]);
            });

            return JSON.stringify(rst, null, 2);
        default:
            return type.name;
    }
};

export const humanize = (type: any) => getTypeStr(type);

export const getPropType = (prop: any) => {
    const propName = get('name', prop.flowType || prop.type);
    if (!propName) return null;

    const isEnum = propName.startsWith('"') || propName === 'enum';
    const name = isEnum ? 'enum' : propName;
    const value = get('type.value', prop);
    if (!name) return null;

    if (
        (isEnum && typeof value === 'string') ||
        (!prop.flowType && !isEnum && !value) ||
        (prop.flowType && !prop.flowType.elements)
    ) {
        return name;
    }

    return prop.flowType ? humanize(prop.flowType) : humanize(prop.type);
};

/*
  Далее идут реальные функции, которые написано под компонент
 */

export const filterProps = (
    componentProps: Record<string, PropType | FlowType>,
    { whiteList }: { whiteList: string[] }
): Record<string, PropType | FlowType> => {
    if (whiteList) {
        return whiteList.reduce(
            (acc: Record<typeof whiteList[number], PropType | FlowType>, key) => {
                if (componentProps[key]) {
                    acc[key] = componentProps[key];
                }
                return acc;
            },
            {}
        );
    }
    return componentProps;
};
