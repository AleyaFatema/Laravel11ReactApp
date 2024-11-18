import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";

function UserEdit({user}) {
    console.log(user);
    const { data, setData, post, processing, errors } = useForm({
        id: user.id,
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('users.update'));
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User Management
                </h2>
            }>
            <Head title="User Edit"/>
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">User Details</h1>

                    </div>

                    <form onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <TextInput className="w-full" placeholder=" "
                                   type="hidden"
                                   value={data.id}
                                   onChange={(e) => setData('id', e.target.value)}
                        />
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>

                            <div>
                                <TextInput className="w-full" placeholder="Name "
                                           value={data.name}
                                           onChange={(e) => setData('name', e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div>
                                <TextInput type="email" className="w-full" placeholder="Email"
                                           value={data.email}
                                           onChange={(e) => setData('email', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </AuthenticatedLayout>
    );
}

export default UserEdit;
