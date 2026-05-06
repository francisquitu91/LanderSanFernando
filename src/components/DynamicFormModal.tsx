import React, { useState } from 'react';

interface DynamicFormModalProps {
  initialData: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    rut: string;
    rentaAproximada: string;
  };
  onComplete: (allData: any) => void;
  onClose: () => void;
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

export const DynamicFormModal: React.FC<DynamicFormModalProps> = ({ initialData, onComplete, onClose }) => {
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
      title: '¿En qué rango estás evaluando invertir',
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
        // Completar formulario
        onComplete({ ...initialData, ...formData });
      }
    } else {
      alert('Por favor selecciona una opción o completa el campo');
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold">Cuéntanos más</h2>
          <p className="text-blue-100 text-sm">Paso {step + 1} de {questions.length}</p>
          
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-blue-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{currentQuestion.title}</h3>

          {currentQuestion.type === 'radio' && (
            <div className="space-y-3">
              {currentQuestion.options && currentQuestion.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
                >
                  <input
                    type="radio"
                    name={currentQuestion.field}
                    value={option}
                    checked={formData[currentQuestion.field as keyof DynamicFormData] === option}
                    onChange={() => handleRadioChange(option)}
                    className="w-5 h-5 text-blue-500 cursor-pointer"
                  />
                  <span className="text-gray-700">{option}</span>
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end rounded-b-2xl">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Atrás
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            {step === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicFormModal;
