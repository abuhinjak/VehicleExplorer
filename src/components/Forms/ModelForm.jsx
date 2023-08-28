import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useParams, useNavigate, Link } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";

import "./forms.scss";
import { toast } from "react-toastify";

function MakeForm() {
    const [model, setModel] = useState('');
    const navigate = useNavigate();

    const { makeId, modelId } = useParams();
    const form = useForm();
    const { register, handleSubmit, formState, setValue } = form;
    const { errors } = formState;

    const getModelData = async () => {
        try {
            const res = await axiosClient.get(`/makes/${makeId}/models/${modelId}`);
            setModel(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      if (model) {
          setValue("name", model.name);
          setValue("image", model.image);
          setValue("desc", model.desc);
      }
  }, [model, setValue]);

    useEffect(() => {
        if (makeId) {
            getModelData();
        }
    }, []);

    const onSubmit = (data) => {
      (modelId ? 
      axiosClient.put(`/makes/${makeId}/models/${modelId}`, data) :
      axiosClient.post(`/makes/${makeId}/models`, data))
        .then((res) => {
          console.log(res)
          navigate(`/makes/${makeId}/models/${res.data.id}`)
          toast.success(`${res.data.name} ${makeId ? 'updated' : 'added'} successfully!`);
        })
        .catch(err => console.log(err))
    }


    return (
        <section className="form--container container">
            {!modelId ? (
                <h1 className="main--title text-center mb-5">
                    Add New <span className="main--title-bold">Model</span>
                </h1>
            ) : (
                <h1 className="main--title text-center mb-5">
                    Edit <span className="main--title-bold">{model.name}</span>
                </h1>
            )}

            <div className="form--wrap">
                <form onSubmit={handleSubmit(onSubmit)} className="form--content">
                    <div className="form--group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required"
                          }
                        })} />
                        {errors.name && <p className="errors">{errors.name.message}</p>}
                    </div>
                    <div className="form--group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            {...register("image")}
                            id="image"
                            placeholder="Add link to image..."
                        />
                    </div>
                    <div className="form--group">
                        <label htmlFor="desc">Description</label>
                        <textarea
                            {...register("desc")}
                            id="desc"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <Link to={`/makes/${makeId}${modelId ? '/models' : ''}/${modelId ? modelId : ''}`} className="btn btn--secondary">
                        Cancel
                    </Link>

                    <button className="btn btn--primary ms-4" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </section>
    );
}

export default MakeForm;