CREATE TABLE building_workers_nonrecur (
    name           VARCHAR(40),
    designation    VARCHAR(40),
    phoneno        CHAR(10),
    work_done      VARCHAR(40),
    amt_paid       VARCHAR(10),
    work_done_date DATE
);

CREATE TABLE building_workers_recur (
    name            VARCHAR(40),
    designation     VARCHAR(40),
    phoneno         CHAR(10),
    work_done       VARCHAR(40),
    monthly_payment VARCHAR(10),
    paid_date       DATE,
    id              INTEGER NOT NULL DEFAULT nextval('building_workers_recur_id_seq'),
    PRIMARY KEY (id)
);

CREATE TABLE complaint (
    name            VARCHAR(40),
    typeofcomplaint VARCHAR(20),
    description     VARCHAR(50),
    status          VARCHAR(20) DEFAULT 'pending',
    id              INTEGER NOT NULL DEFAULT nextval('complaint_id_seq'),
    PRIMARY KEY (id)
);

CREATE TABLE resreg (
    firstname      VARCHAR(40),
    lastname       VARCHAR(40),
    typeofres      VARCHAR(10),
    yearofmovingin INTEGER,
    houseno        VARCHAR(10) NOT NULL,
    email          VARCHAR(40),
    password       VARCHAR(10),
    PRIMARY KEY (houseno),
    UNIQUE (email)
);

CREATE TABLE updates (
    id     INTEGER NOT NULL DEFAULT nextval('updates_id_seq'),
    date   DATE,
    update VARCHAR(255),
    PRIMARY KEY (id)
);
