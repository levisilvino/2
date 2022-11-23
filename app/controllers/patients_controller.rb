class PatientsController < ApplicationController
  before_action :set_patient, only: %i[show]

  def index
    @patients = policy_scope(Patient).order(first_name: :asc)
    @patient = Patient.find(params["selectPatient"]) if params["selectPatient"].present?
  end

  def show
  end

  def new
    @patient = Patient.new
    authorize @patient
  end

  def create
    @patient = Patient.new(patient_params)
    authorize @patient
    if @patient.save
      if @patient.patient_type == "receptor"
        @sample = Sample.new
        authorize @sample
        @sample.patient = @patient
        @sample.save
        redirect_to edit_sample_path(@sample)
      else
        redirect_to new_family_path(patient: @patient)
      end
    else
      @patients = policy_scope(Patient).order(created_at: :desc)
      render 'samples/new'
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :gender, :born_at, :address, :cpf, :sus_code, :patient_type)
  end

  def set_patient
    # @patient = Patient.find(params[:id]) ## Forma sem pundit
    @patient = policy_scope(Patient).find(params[:id])
    authorize @patient
  end
end
