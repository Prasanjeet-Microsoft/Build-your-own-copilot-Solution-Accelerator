import React, { useState, useEffect } from 'react';
import { Spinner, SpinnerSize,ISpinnerStyles } from '@fluentui/react';
import styles from  './SpinnerComponent.module.css';

interface SpinnerComponentProps {
    loading: boolean;
    label?: string; // Label is optional
  }
  
  const spinnerStyles: ISpinnerStyles = {
    label: {
      fontSize: '20px', // Increase font size to 20px
      color: 'rgb(91 184 255)', 
      fontWeight: 600
    },
  };


  export const SpinnerComponent: React.FC<SpinnerComponentProps> = ({ loading, label }) => {
    if (!loading) return null;
  
    return (
      <div className={styles.overlay} data-testid="spinnerContainer">
          <Spinner label={label || undefined} size={SpinnerSize.large} styles={spinnerStyles} />
      </div>
    );
  };