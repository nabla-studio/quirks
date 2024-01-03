export const semverRegex =
  /(?<Major>0|(?:[1-9]\d*))(?:\.(?<Minor>0|(?:[1-9]\d*))(?:\.(?<Patch>0|(?:[1-9]\d*)))?(?:-(?<PreRelease>[0-9A-Z.-]+))?(?:\+(?<Meta>[0-9A-Z.-]+))?)?/;

export const compareOperatorRegex =
  /^\s*([<>]=?)\s*([0-9]+\.[0-9]+\.[0-9]+)\s*$/;

export const extractVer = (version: string) => {
  const results = semverRegex.exec(version);

  if (results && results.length > 0) {
    return results[0];
  }

  return null;
};

/**
 * Within the chain registry some data are set atomically, so it is necessary to parse the data to find the version string correctly.
 *
 * @param version the string we want to parse, for example: osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230922030206-734f99fba785
 * @returns the version string in semantic versioning format
 */
export const parseVer = (version: string) => {
  const extVersion = extractVer(version);

  if (extVersion) {
    const spaces = extVersion.split('.').length;
    const padding = 3 - spaces;

    if (padding < 0) {
      throw new Error('contact maintainers: bad version');
    }

    const paddingZero =
      padding > 0 ? `.${new Array(padding).fill('0').join('.')}` : '';

    return `${extVersion}${paddingZero}`;
  }

  return version;
};

export type ComparisonResult = -1 | 0 | 1;

export type VersionConstraint = {
  operator: '>=' | '>' | '<=' | '<';
  version: string;
};

export const compareSemVer = (
  version1: string,
  version2: string,
): ComparisonResult => {
  const parseVersion = (v: string) => v.split('.').map(Number);

  const [major1, minor1, patch1] = parseVersion(version1);
  const [major2, minor2, patch2] = parseVersion(version2);

  if (major1 !== major2) {
    return major1 > major2 ? 1 : -1;
  }

  if (minor1 !== minor2) {
    return minor1 > minor2 ? 1 : -1;
  }

  if (patch1 !== patch2) {
    return patch1 > patch2 ? 1 : -1;
  }

  return 0; // Versions are equal
};

export const checkVersionConstraint = (
  version: string,
  constraint: VersionConstraint,
) => {
  const comparisonResult = compareSemVer(version, constraint.version);

  switch (constraint.operator) {
    case '>=':
      return comparisonResult >= 0;
    case '>':
      return comparisonResult > 0;
    case '<=':
      return comparisonResult <= 0;
    case '<':
      return comparisonResult < 0;
    default:
      throw new Error(`Invalid operator: ${constraint.operator}`);
  }
};

export const satisfies = (version: string, compare: string) => {
  const constraintParts = compare.match(compareOperatorRegex);

  if (constraintParts) {
    const operator = constraintParts[1] as VersionConstraint['operator'];
    const targetVersion = constraintParts[2];

    const isSatisfied = checkVersionConstraint(version, {
      operator,
      version: targetVersion,
    });

    return isSatisfied;
  } else {
    throw new Error(`${compare} isn't a valid compare string format`);
  }
};
