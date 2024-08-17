import React, { createContext, useState } from 'react';

export const TotalUsageContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0, () => {}]);
