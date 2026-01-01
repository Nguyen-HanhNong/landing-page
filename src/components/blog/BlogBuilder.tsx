import { Fragment, type ReactNode } from "react";

type BlogBuilderParams = {
  title: string;
  image?: string;
  description: string;
};

class BlogBuilder {
  list: ReactNode[] = [];
  title: string;
  image?: string;
  description: string;

  constructor({ title, image, description }: BlogBuilderParams) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addParagraph = (props: ReactNode) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        {props}
      </p>
    );
    return this;
  };

  addHeading = (props: ReactNode) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
