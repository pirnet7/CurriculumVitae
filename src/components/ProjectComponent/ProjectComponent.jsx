import { t } from "i18next";
import "./ProjectComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = ({ title, date, skills, development, description }) => {
  return (
    <div className="mb-4 col-lg-4 col-md-6 col-sm-12 sc-navy">
      <sdx-card label={title}>
        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-calendar"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>{t("projects.date")}:</strong> {date}
          </p>
        </div>

        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-strong-arm"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>{t("projects.skills")}:</strong> {skills}
          </p>
        </div>

        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-workstation"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>{t("projects.developement")}:</strong> {development}
          </p>
        </div>

        <div>
          <div className="d-flex align-items-center margin-bottom-2">
            <sdx-icon
              icon-name="icon-edit"
              size="2"
              sr-hint="Displays the user account"
            ></sdx-icon>
            <p className="mb-0 margin-left-1">
              <strong>{t("projects.description")}:</strong> <br />
            </p>
          </div>
          <p className="margin-left-4">{description}</p>
        </div>
      </sdx-card>
    </div>
  );
};

export default Project;
