"use client";
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import { Templates } from '@/constant';  // Ensure this is the correct data source
import { Template } from '@/type';

interface TemplatesListProps {
    userSearchInput: string;  // Define the type of the prop
}

function TemplatesList({ userSearchInput }: TemplatesListProps) {
    const [templateList, setTemplateList] = useState<Template[]>(Templates);  // Use correct data type (array of TEMPLATE)

    useEffect(() => {
        if (userSearchInput) {
            const filterData = Templates.filter((item)=> 
                item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase())
            );
            setTemplateList(filterData);
        } else {
            setTemplateList(Templates);
        }
    }, [userSearchInput]);  // Add userSearchInput to the dependency array

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {templateList.map((item: Template, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
        </div>
    );
}

export default TemplatesList;
