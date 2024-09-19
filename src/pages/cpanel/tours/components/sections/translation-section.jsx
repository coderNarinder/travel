import React from 'react'
import { Controller } from 'react-hook-form';

const TranslationSection = ({
    translationFields,  register, errors, watch,control
}) => {
  return (
    <>
        {translationFields && translationFields.map((field, index) => (
                <div className="accordion-item card" key={field.id}>
                  <h2 className="accordion-header" id={`generalInfo${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseLang${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseLang${index}`}
                    >
                      Translation ({field?.language_name})
                    </button>
                  </h2>
                  <div
                    id={`collapseLang${index}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`generalInfo${index}`}
                  >
                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.name`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>Title</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.name`}
                            render={({ field }) => (
                              <input
                                {...field}
                                placeholder="Title"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.short_description`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>short description</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={
                              `translations.${index}.short_description`
                            }
                            render={({ field }) => (
                              <textarea
                                {...field}
                                placeholder="Short Description"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.description`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>Description</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.description`}
                            render={({ field }) => (
                              <textarea
                                {...field}
                                placeholder="Description"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row d-none">
                        <label
                          htmlFor={`translations.${index}.language_id`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>language</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.language_id`}
                            render={({ field }) => (
                              <input
                                {...field}
                                placeholder="language id"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        ))}
    </>
  )
}
export default TranslationSection;