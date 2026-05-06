import React, { useState } from 'react';

interface DynamicFormProps {
  initialData: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    rut: string;
    rentaAproximada: string;
  };
  onComplete: (allData: any) => void;
  onBack: () => void;
}

interface DynamicFormData {
  vivienda: string;
  tipoDepto: string;
  ingresoMensual: string;
  rangoInversion: string;
  pieDeCuenta: string;
  etapa: string;
  motivacion: string;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ initialData, onComplete, onBack }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<DynamicFormData>({
    vivienda: '',
    tipoDepto: '',
    ingresoMensual: '',
    rangoInversion: '',
    pieDeCuenta: '',
    etapa: '',
    motivacion: '',
  });

  const questions = [
    {
      title: 'Para orientarte mejor, ¿Cómo estás viendo Maroto II?',
      field: 'vivienda',
      type: 'radio',
      options: ['Vivir', 'Segunda vivienda', 'Inversión'],
    },
    {
      title: '¿Qué tipo de departamento te interesa más?',
      field: 'tipoDepto',
      type: 'radio',
      options: ['3 dormitorios / 2 baños', '2 dormitorios / 2 baños'],
    },
    {
      title: 'Para orientarte mejor, ¿cuál es tu ingreso mensual líquido aproximado?',
      field: 'ingresoMensual',
      type: 'radio',
      options: [
        'Menos de $3.500.000',
        '$3.500.000 – $4.500.000',
        '$4.500.000 – $5.500.000',
        '$5.500.000 o más',
      ],
    },
    {
      title: '¿En qué rango estás evaluando invertir?',
      field: 'rangoInversion',
      type: 'radio',
      options: ['Menos de 6.000 UF', '6.000 – 7.000 UF', '7.000 – 8.000 UF', 'Sobre 9.000 UF'],
    },
    {
      title: 'Para orientarte mejor, ¿con qué pie cuentas hoy para invertir?',
      field: 'pieDeCuenta',
      type: 'radio',
      options: ['1.200 – 1.600 UF', '1.600 UF o más', 'Pago al contado'],
    },
    {
      title: '¿En qué etapa estás hoy?',
      field: 'etapa',
      type: 'radio',
      options: ['Comparando opciones', 'Quiero visitar', 'Listo para avanzar'],
    },
    {
      title: '¿Qué te motivó a cotizar este proyecto?',
      field: 'motivacion',
      type: 'text',
      placeholder: 'Ej: inversión, segunda vivienda, vista al mar...',
    },
  ];

  const currentQuestion = questions[step];

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [currentQuestion.field]: value,
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [currentQuestion.field]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (formData[currentQuestion.field as keyof DynamicFormData]) {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete({ ...initialData, ...formData });
      }
    } else {
      alert('Por favor selecciona una opción o completa el campo');
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-900">Cuéntanos más</h2>
          <span className="text-sm text-gray-500">Paso {step + 1} de {questions.length}</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-gray-900 mb-4">{currentQuestion.title}</h3>

        {currentQuestion.type === 'radio' && (
          <div className="space-y-2">
            {currentQuestion.options && currentQuestion.options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
              >
                <input
                  type="radio"
                  name={currentQuestion.field}
                  value={option}
                  checked={formData[currentQuestion.field as keyof DynamicFormData] === option}
                  onChange={() => handleRadioChange(option)}
                  className="w-4 h-4 text-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === 'text' && (
          <input
            type="text"
            value={formData[currentQuestion.field as keyof DynamicFormData]}
            onChange={handleTextChange}
            placeholder={currentQuestion.placeholder}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>

      {/* Footer */}
      <div className="flex gap-3 justify-between">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          {step === 0 ? 'Volver' : 'Atrás'}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          {step === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
