import { CheckCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Container, IconContainer } from './styles';

interface CardChipProps {
  label?: string;
  icon?: React.ReactNode;
  editable?: boolean;
}

const CardChip: React.FC<CardChipProps> = ({ label, icon, editable }) => {
  const [labelState, setLabelState] = useState('');
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(false);

  const handleEditLabel = (value: string) => {
    setLabelState(value);
    setEditing(false);
  };

  if (!label) return <></>;
  return (
    <Container
      // className={`bg-primary rounded-xl flex px-2 py-1 min-w-[8rem] items-center ${
      //   editable && 'cursor-pointer'
      // }`}
      onClick={() => {
        editable && setEditing(true);
      }}
    >
      {icon && !labelState && (
        <IconContainer>{editing ? <CheckCircleIcon /> : icon}</IconContainer>
      )}

      {!editing ? (
        labelState || label
      ) : (
        <input
          autoFocus
          type='text'
          onBlur={(e) => {
            handleEditLabel(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              handleEditLabel(e.currentTarget.value);
            }
          }}
        />
      )}
    </Container>
  );
};

export default CardChip;
