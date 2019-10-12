import React from 'react';

import { CustomButtonContainer } from './custombutton.styles';

const CustomButton = ({ children, ...otherProps}) => (
    <CustomButtonContainer  {...otherProps}>
        {children}
    </CustomButtonContainer>
);

export default React.memo(CustomButton);