import React from 'react';
import dynamic from 'next/dynamic';
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

import { ProductWithSlug } from '../../types/Product';
import Badge from '../Badge'; 

const DeathIdiom = dynamic(() => import('./LeadPhrase'), { ssr: false });

// Import Styled Components
import {
  AgeRange,
  ContentContainer,
  Description,
  Icon,
  IconContainer,
  ListItem,
} from './Item.atoms';

export default function Item(props: ProductWithSlug) {

  const getIcon = () => {
    return <Icon src='https://static.killedbygoogle.com/com/guillotine.svg' alt="Guillotine" />;
  };
  return (
    <ListItem>
      <IconContainer>
        {getIcon()}
        <Badge content={props.release_date} />
      </IconContainer>
      <ContentContainer>
        <h2>
          {props.name}
        </h2>
        <Description>
          {props.technology}<br/>
          {props.status}<br/>
          {props.promoter}<br/>
          {props.budget}
        </Description>
      </ContentContainer>
    </ListItem>
  );
}

