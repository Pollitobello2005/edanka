'use client';

import { Children, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import './Stepper.css';

type StepperProps = {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  completeButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: {
    step: number;
    currentStep: number;
    onStepClick: (step: number) => void;
  };
};

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Atrás',
  nextButtonText = 'Continuar',
  completeButtonText = 'Solicitar demo',
  disableStepIndicators = false,
  renderStepIndicator,
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className="stepper-outer" data-stepper="true">
      <div className={`stepper-shell ${stepCircleContainerClassName}`}>
        <div className={`stepper-indicator-row ${stepContainerClassName}`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;

            return (
              <>
                {renderStepIndicator ? (
                  <button
                    key={`indicator-${stepNumber}`}
                    type="button"
                    className={`stepper-indicator ${disableStepIndicators ? 'is-disabled' : ''}`}
                    onClick={() => {
                      if (disableStepIndicators) return;
                      setDirection(stepNumber > currentStep ? 1 : -1);
                      updateStep(stepNumber);
                    }}
                    disabled={disableStepIndicators}
                  >
                    <span className={`stepper-dot ${currentStep === stepNumber ? 'is-active' : currentStep > stepNumber ? 'is-complete' : ''}`}>
                      {stepNumber}
                    </span>
                  </button>
                ) : (
                  <button
                    key={`indicator-${stepNumber}`}
                    type="button"
                    className={`stepper-indicator ${disableStepIndicators ? 'is-disabled' : ''}`}
                    onClick={() => {
                      if (disableStepIndicators) return;
                      setDirection(stepNumber > currentStep ? 1 : -1);
                      updateStep(stepNumber);
                    }}
                    disabled={disableStepIndicators}
                  >
                    <span className={`stepper-dot ${currentStep === stepNumber ? 'is-active' : currentStep > stepNumber ? 'is-complete' : ''}`}>
                      {currentStep > stepNumber ? '✓' : stepNumber}
                    </span>
                  </button>
                )}
                {isNotLastStep && <span className={`stepper-connector ${currentStep > stepNumber ? 'is-complete' : ''}`} />}
              </>
            );
          })}
        </div>

        <StepperContentWrapper isCompleted={isCompleted} currentStep={currentStep} direction={direction} className={`stepper-content ${contentClassName}`}>
          {stepsArray[currentStep - 1]}
        </StepperContentWrapper>

        {!isCompleted && (
          <div className={`stepper-footer ${footerClassName}`}>
            <div className={`stepper-footer-nav ${currentStep !== 1 ? 'spread' : 'end'}`}>
              {currentStep !== 1 && (
                <button type="button" onClick={handleBack} className="stepper-back-button" {...backButtonProps}>
                  {backButtonText}
                </button>
              )}
              <button type="button" onClick={isLastStep ? handleComplete : handleNext} className="stepper-next-button" {...nextButtonProps}>
                {isLastStep ? completeButtonText : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepperContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}: {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: 'spring', duration: 0.45 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={height => setParentHeight(height)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({
  children,
  direction,
  onHeightReady,
}: {
  children: ReactNode;
  direction: number;
  onHeightReady: (height: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? '-100%' : '100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? '50%' : '-50%',
    opacity: 0,
  }),
};

export function Step({ children }: { children: ReactNode }) {
  return <div className="stepper-step">{children}</div>;
}