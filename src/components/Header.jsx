export const Header = () => {
  return (
    <div
      className="container text-center"
      style={{
        boxShadow: "0 10px 10px rgba(54, 94, 50, 0.2)",
        border: "1px solid rgba(54, 94, 50, 0.2)",
        marginBottom: "20px",
      }}
    >
      <div className="row">
        <span className="col-1"></span>
        <span className="col-3 task-description">Title</span>
        <span className="col-5 task-description">Description</span>
        <span className="col-2 task-description">Status</span>
      </div>
    </div>
  );
};
