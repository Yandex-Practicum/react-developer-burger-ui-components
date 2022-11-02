import React from 'react';
import { useComponentProps } from 'docz';
import components from 'gatsby-theme-docz/src/components';
import { ComponentWithDocGenInfo } from 'docz/dist/components/Props';
import { get } from 'lodash/fp';
import { getPropType, filterProps } from './props.utils';

const PropsBase = components.props;

export const Props = ({
    of: component,
    whiteList,
}: {
    of: ComponentWithDocGenInfo;
    whiteList: string[];
}) => {
    const fileName = get('__filemeta.filename', component);
    const filemetaName = get('__filemeta.name', component);
    const componentName = filemetaName || get('displayName', component) || get('name', component);

    const props = useComponentProps({ componentName, fileName });
    const filteredProps = filterProps(props, { whiteList });
    return <PropsBase props={filteredProps} getPropType={getPropType} />;
};
