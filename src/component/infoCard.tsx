"use client"
import React from "react";
import Button from "./button";
import { usePathname, useRouter } from "next/navigation";

interface SchemaField {
    name: string;
    type: string;
}

interface DatasetOverviewProps {
    dataType: {
        name: string;
        description?: string;
        type: string;
    };

    dataSource: {
        type: string;
        source?: string;
    };

    fileSelection: {
        uploadPath: string;
    };

    storage: {
        datastoreType: string;
        location?: string;
    };

    schema: SchemaField[];

    editIconUrl?: string;
}
const Field = ({ label, value }: { label?: string; value: string }) => (
    <div className="flex flex-col">
        <div className="h-5">
            {label && (
                <p className="text-[#06D6A0] text-sm font-medium">{label}</p>
            )}
        </div>
        <p className="text-[#E9E9E9] text-sm font-semibold break-all mt-6">
            {value || "-"}
        </p>
    </div>
);

const Card = ({
    title,
    iconUrl,
    children,
}: {
    title: string;
    iconUrl?: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-40">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt="edit"
                    className="w-4 h-4 cursor-pointer"
                />
            )}
        </div>

        <div className="border border-emerald-400 rounded-xl px-6 py-5">
            {children}
            <div className="mt-4 border-t border-white/40" />
        </div>
    </div>
);

const DatasetOverviewCards: React.FC<DatasetOverviewProps> = ({
    dataType,
    dataSource,
    fileSelection,
    storage,
    schema,
    editIconUrl = "/pen_icon.svg",
}) => {
    const router = useRouter();
    const pathname = usePathname();

    const segments = pathname.split("/").filter(Boolean);
    const step = Number(segments[segments.length - 1]);

    return (
        <div className="bg-[#1B2028] px-10 py-8 rounded-xl">
            <h2 className="text-white text-[32px] font-semibold px-10 mb-8">
                Review
            </h2>

            <div className="grid grid-cols-2 gap-10">
                <Card title="Data Type" iconUrl={editIconUrl}>
                    <div className="grid grid-cols-3 gap-12">
                        <Field label="Name" value={dataType.name} />
                        <Field label="Description" value={dataType.description ?? "-"} />
                        <Field label="Type" value={dataType.type} />
                    </div>
                </Card>

                <Card title="Data Source" iconUrl={editIconUrl}>
                    <div className="grid grid-cols-2 gap-12">
                        <Field label="Source Type" value={dataSource.type} />
                        <Field label="" value={dataSource.source ?? "-"} />
                    </div>
                </Card>

                <Card title="File Selection" iconUrl={editIconUrl}>
                    <Field label="Upload Path" value={fileSelection.uploadPath} />
                </Card>

                <Card title="Storage" iconUrl={editIconUrl}>
                    <div className="grid grid-cols-2 gap-12">
                        <Field label="Datastore Type" value={storage.datastoreType} />
                        <Field label="" value={storage.location ?? "-"} />
                    </div>
                </Card>

                <Card title="Schema" iconUrl={editIconUrl}>
                    <div className="grid grid-cols-2 gap-12 gap-y-6">
                        {schema.map((field, index) => (
                            <Field
                                key={index}
                                label={field.name}
                                value={field.type}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex gap-3 mt-15">
                <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5" />
                {(step === 5) ? <Button text={"Next"} onClick={() => router.push("/step/settings/6")} className="w-34.25 text-sm py-2.5" />
                    : <Button text={"Finish"} onClick={() => router.push("/step/settings/6")} className="w-34.25 text-sm py-2.5" />}
            </div>
        </div>
    );
};

export default DatasetOverviewCards;
