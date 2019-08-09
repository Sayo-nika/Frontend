import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{ padding: 16 }}>
            <Typography>
                Copyright 2018-{new Date().getFullYear()} (c) Sayonika Project
                Authors.
            </Typography>
            <Typography paragraph>
                Sayonika is a project by Clarity and friends. Doki Doki
                Literature Club, the Logo, and artworks are Copyright Team
                Salvato LLC. All Rights Reserved.
            </Typography>
        </div>
    );
};

export default Footer;
