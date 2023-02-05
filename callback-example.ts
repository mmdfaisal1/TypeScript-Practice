test.skip("Adding existing repository to appInstallation - no callback", async () => {
  try {
    await addRepositoriesToAppInstallation(
      appInstallationId,
      repositoryAdditionRequest
    );
  } catch (axiosError) {
    console.log(axiosError);
    expect((axiosError as AxiosError).response?.status).toBe(409);
  }
});

test.skip("Adding existing repository to appInstallation - using callback", async () => {
  const statusCode = await makeApiErrorRequestCallback(async () => {
    await addRepositoriesToAppInstallation(
      appInstallationId,
      repositoryAdditionRequest
    );
  });
  console.log(statusCode);
});

const makeApiErrorRequestNoCallback = async function (
  appInstallationId: number,
  repositoryAdditionRequest: RepositoryAdditionRequest
) {
  try {
    await addRepositoriesToAppInstallation(
      appInstallationId,
      repositoryAdditionRequest
    );
  } catch (axiosError) {
    return (axiosError as AxiosError).response?.status;
  }
};

//higher order function - write this second
//This is the function to which the callabck function is sent as an argument
//Or the function which takes in callabck function as a parameter
async function makeApiErrorRequestCallback(cb: () => Promise<void>) {
  try {
    await cb();
  } catch (axiosError) {
    return (axiosError as AxiosError).response?.status;
  }
}

//callback function - write this first
async function callback() {
  await addRepositoriesToAppInstallation(
    appInstallationId,
    repositoryAdditionRequest
  );
}

makeApiErrorRequestCallback(async () => {
  await addRepositoriesToAppInstallation(
    appInstallationId,
    repositoryAdditionRequest
  );
});
