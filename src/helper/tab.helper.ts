interface PositionProps {
  tabSelected: string;
  lineRef: React.RefObject<HTMLDivElement>;
  setLinePosition: React.Dispatch<
    React.SetStateAction<{ width: string; left: string }>
  >;
}

export const updateLinePosition = ({
  tabSelected,
  lineRef,
  setLinePosition,
}: PositionProps) => {
  const activeTabElement = document.querySelector(
    `.tab-${tabSelected}`
  ) as HTMLElement;

  if (activeTabElement && lineRef.current) {
    setLinePosition({
      width: `${activeTabElement.offsetWidth}px`,
      left: `${activeTabElement.offsetLeft}px`,
    });
  }
};
