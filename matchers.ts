await expect(
  addRepositoriesToAppInstallation(
    appInstallationId,
    repositoryAdditionRequest
    // axiosRequestConfig
  )
).rejects.toThrowError(
  expect.objectContaining({ message: expect.stringContaining("409") })
);
