import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const ucfirst = (str) => `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;

const RoleList = ({ items, title }) => (
  <>
    <h2>{title}</h2>
    <ul>
      {items.map(({ _key, person, roles }) => (
        <li key={_key}>
          {person?.image && person.image.asset && (
            <img
              src={imageUrlFor(buildImageObj(person.image))
                .width(100)
                .height(100)
                .fit("crop")
                .url()}
              alt=""
            />
          )}
          <strong>{(person && person.name) || <em>Missing</em>}</strong>
          {roles?.map((role, idx) => {
            switch (true) {
              case idx === 0:
                return <span key={role}>{ucfirst(role)}</span>;
              case idx === roles.length - 1:
                return <span key={role}> & {role}</span>;
              default:
                return <span key={role}>, {role}</span>;
            }
          })}
        </li>
      ))}
    </ul>
  </>
);

export default RoleList;
