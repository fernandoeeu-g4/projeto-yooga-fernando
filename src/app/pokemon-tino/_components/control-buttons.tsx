// src/features/pokemon/pages/distributor/components/control-buttons.tsx
type ControlButtonsProps = {
  onDistribuir: () => void;
  onLimpar: () => void;
};

export function ControlButtons({
  onDistribuir,
  onLimpar,
}: ControlButtonsProps) {
  return (
    <div className="space-x-4">
      <button
        onClick={onDistribuir}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Distribuir
      </button>
      <button
        onClick={onLimpar}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Limpar
      </button>
    </div>
  );
}
