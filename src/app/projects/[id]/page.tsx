"use client";

interface Props {
  params: { id: string };
}

const Project: React.FC<Props> = ({ params }) => {
  const { id } = params;

  if (!id) {
    return (
      <div>
        <p>404 | project not found</p>
      </div>
    );
  }

  return (
    <div>
      <p>one project</p>
      <p>{`project id: ${id}`}</p>
    </div>
  );
};

export default Project;
